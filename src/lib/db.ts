import sql from 'mssql';

const config = {
  user: 'sa',
  password: 'admin',
  server: 'localhost',
  database: 'dbTodoKanban',
  options: {
    encrypt: false,
    trustServerCertificate: true
  },
  trustedConnection: true
};

let pool: sql.ConnectionPool | null = null;

export async function getConnection() {
  try {
    if (!pool) {
      pool = await new sql.ConnectionPool(config).connect();
    }
    return pool;
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
    throw error;
  }
}