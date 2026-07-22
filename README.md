# yazi-action

This repository provides reusable GitHub Actions related to Yazi. They can be used freely.

## CI Runner Architecture support

Supported operating systems and architectures for all actions:

- [`ubuntu-24.04`](https://github.com/actions/runner-images/blob/main/images/ubuntu/Ubuntu2404-Readme.md) (x86_64)
- [`ubuntu-24.04-arm`](https://github.com/actions/runner-images/blob/main/images/ubuntu/Ubuntu2404-Arm64-Readme.md)
  (arm64)

Everything is tested on both architectures to maintain compatibility.

## [build-nightly](build-nightly/action.yml)

[build-nightly](build-nightly/action.yml) compiles and caches yazi and ya nightly builds based on a yazi git commit. It
also uploads the build as a workflow artifact so other jobs in the same run can reuse it via
[restore-nightly](restore-nightly/action.yml) instead of rebuilding.

## [restore-nightly](restore-nightly/action.yml)

[restore-nightly](restore-nightly/action.yml) downloads and extracts the artifact published by
[build-nightly](build-nightly/action.yml), adding `yazi` and `ya` to the `PATH` without rebuilding. It is meant for
other jobs of the same workflow run, and fails loudly if no matching build exists or the extracted version does not
report the expected commit.
