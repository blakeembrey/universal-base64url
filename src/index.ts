import {
  decode as decodeBase64,
  encode as encodeBase64
} from "universal-base64";

export function decode(str: string): string {
  return decodeBase64(str.replace(/\-/g, "+").replace(/_/g, "/"));
}

export function encode(str: string): string {
  return encodeBase64(str)
    .replace(/\//g, "_")
    .replace(/\+/g, "-")
    .replace(/=+$/, "");
}
