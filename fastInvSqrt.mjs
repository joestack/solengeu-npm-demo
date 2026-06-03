//
// Fast inverse square root.
// ---------------------------------------------
// DEMO ONLY: this implementation is lifted verbatim from Quake III Arena
// (id Software), which is licensed under GPL-2.0 — a copyleft license that is
// incompatible with this app's MIT license. It exists so JFrog Snippet Detection
// has a recognizable open-source snippet to flag. Do not ship this.
//

export function fastInvSqrt(x) {
  const buf = new ArrayBuffer(4)
  const f32 = new Float32Array(buf)
  const u32 = new Uint32Array(buf)

  f32[0] = x
  u32[0] = 0x5f3759df - (u32[0] >> 1) // what the f***?
  let y = f32[0]
  y = y * (1.5 - 0.5 * x * y * y) // 1st Newton-Raphson iteration
  return y
}
