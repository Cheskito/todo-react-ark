// /app/api/auth/login/route.ts (con App Router y TypeScript)
import { NextRequest, NextResponse } from 'next/server'
import sql from 'mssql'
import bcrypt from 'bcryptjs'
import { getConnection } from '@/lib/db' // tu archivo de conexión que mostraste antes

export async function POST(req: NextRequest) {
  const { email, password } = await req.json()

  try {
    const pool = await getConnection()

    const result = await pool
      .request()
      .input('Email', sql.NVarChar, email)
      .execute('sp_AuthenticateUser')

    const user = result.recordset[0]

    if (!user) {
      return NextResponse.json({ success: false, message: 'Usuario o contraseña incorrectos' }, { status: 401 })
    }

    const passwordMatch = user && await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      return NextResponse.json({ success: false, message: 'Usuario o contraseña incorrectos' }, { status: 401 })
    }

    // Puedes generar un token aquí si lo necesitas
    return NextResponse.json({ success: true, user })
  } catch (error: any) {
    console.error('Error al autenticar:', error);
    return NextResponse.json({ success: false, message: 'Error interno del servidor', error: error?.message || error?.toString?.() || error }, { status: 500 });
  }
}
