import { PrismaClient } from '@prisma/client'

// Às vezes o construtor exige um objeto de configuração, mesmo que vazio
const db = new PrismaClient({})

export default db