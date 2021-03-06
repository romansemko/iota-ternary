import { trit } from "../types"

export function tritsToBytes(trits: trit[]): Buffer {
  var i, j, value

  const size = Math.ceil(trits.length / 5)
  const bytes: Buffer = Buffer.alloc(size)

  for (i = 0, value = 0; i < size; ++i) {

    value = (
      (3**0)*(trits[i*5 + 0] || 0)
      +
      (3**1)*(trits[i*5 + 1] || 0)
      +
      (3**2)*(trits[i*5 + 2] || 0)
      +
      (3**3)*(trits[i*5 + 3] || 0)
      +
      (3**4)*(trits[i*5 + 4] || 0)
    )

    bytes.writeInt8(value, i)
  }

  return bytes
}
