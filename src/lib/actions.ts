'use server'
import { Product, Address } from "@/types/global"
import db from "./db"
import jwt, { JwtPayload } from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { revalidatePath } from "next/cache"
const SECRET_KEY = 'DUYI-SECRET-KEY'

export async function loginAction(email: string, password: string) {
  const result = await db('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password])
  const cookie = await cookies()
  if (result.length === 0) {
    return {
      status: 401,
      body: 'login failed'
    }
  } else {
    // 生成token并存储到cookie
    const token = jwt.sign({ email, name: result[0].name, userid: result[0].id }, SECRET_KEY, { expiresIn: '1h' })
   
    cookie.set({
        name: 'token',
        value: token,
        path: '/',
        maxAge: 60 * 60 * 24 * 30, // 30 days
    })
    
    return {
      status: 200,
      body: 'login success'
    }
  }
}

export async function logoutAction() {
  const cookie = await cookies()
  cookie.delete('token')
  return {
    status: 200,
    body: 'logout success'
  }
}

export async function registerAction(email: string, name: string, password: string) {
  const result = await db('SELECT * FROM users WHERE email = $1', [email])
  if (result.length > 0) {
    return {
      status: 401,
      body: 'register failed'
    }
  } else {
    await db('INSERT INTO users (email, name, password) VALUES ($1, $2, $3)', [email, name, password])
    return {
      status: 200,
      body: 'register success'
    }
  }
}

// token校验
export async function authAction() {
  const cookie = await cookies()
  const token = cookie.get('token')
  try {
    if (!token) {
      return {
        status: 401,
        body: 'auth failed'
      }
    }
    const result = jwt.verify(token.value, SECRET_KEY) as JwtPayload
    return {
      status: 200,
      body: 'auth success',
      data: result
    }
  } catch (error) {
    return {
      status: 401,
      body: 'auth failed'
    }
  }
}

export async function productsAction() {
  const result = await db('SELECT * FROM products') as Product[]
  return {
    status: 200,
    body: 'products success',
    data: result
  }  
}

export async function productAction(id: number) {
  const result = await db('SELECT * FROM products WHERE id = $1', [id]) as Product[]
  return {
    status: 200,
    body: 'get product success',
    data: result[0]
  }
}

export async function addAddressAction(name: string, city: string, address: string, phone: string, userid: number) {
    await db('INSERT INTO addresses (name, city, address, phone, userid) VALUES ($1, $2, $3, $4, $5)', [name, city, address, phone, userid])
    revalidatePath('/account')
    return {
      status: 200,
      body: 'add address success'
    }  
}

export async function addressesAction(userid: number) {
  const result = await db('SELECT * FROM addresses WHERE userid = $1', [userid]) as Address[]
  return {
    status: 200,
    body: 'addresses success',
    data: result
  }  
}

export async function removeAddressAction(id: number) {
  await db('DELETE FROM addresses WHERE id = $1', [id])
  revalidatePath('/account')
  return {
    status: 200,
    body: 'remove address success'
  }
}