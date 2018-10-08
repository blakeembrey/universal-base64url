import { encode as encodeBase64, decode as decodeBase64 } from 'universal-base64'

const TO_URL = {
  '/': '_',
  '+': '-',
  '=': ''
}

const FROM_URL = {
  '_': '/',
  '-': '+'
}

export function decode (str: string): string {
  return decodeBase64(str.replace(/[\-_]/g, x => FROM_URL[x as '_' | '-']))
}

export function encode (str: string): string {
  return encodeBase64(str).replace(/[/+=]/g, x => TO_URL[x as '/' | '+' | '='])
}
