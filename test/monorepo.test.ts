import fs from "fs/promises"
import { resolve } from "path"

import { assert, it } from "vitest"

const thisdir = resolve(import.meta.url.replace("file://", ""), "..")
const ubuntuRegex = /ubuntu-26/

const usesCorrectVersion = (lines: string[], context: string) => {
  assert(lines.length > 0, `${context}: no lines found that contain ubuntu-`)

  for (const line of lines) {
    assert(ubuntuRegex.test(line), `${context}: "${line}" does not describe the correct ubuntu version`)
  }
}

it("README uses a the correct ubuntu-xx version", async () => {
  const inReadme = (await fs.readFile(resolve(thisdir, "../README.md"), "utf-8"))
    .split("\n")
    .filter(line => line.includes("ubuntu-"))

  // assert
  usesCorrectVersion(inReadme, "README.md")
})

it("ci workflows use the correct ubuntu-xx version", async () => {
  const inCi = (await fs.readFile(resolve(thisdir, "../.github/workflows/ci.yml"), "utf-8"))
    .split("\n")
    .filter(line => line.includes("ubuntu-"))

  // assert
  usesCorrectVersion(inCi, "ci.yml")
})
