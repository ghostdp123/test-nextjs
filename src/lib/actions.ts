'use server'

export async function loginAction() {
  return {
    status: 200,
    body: 'login'
  }
}

export async function logoutAction() {
  return {
    status: 200,
    body: 'logout'
  }
}

export async function registerAction() {
  return {
    status: 200,
    body: 'register'
  }
}