# yazi-action

This repository provides reusable GitHub Actions related to Yazi. They can be used freely.

## [build-nightly](build-nightly/action.yml)

[build-nightly](build-nightly/action.yml) compiles and caches yazi and ya nightly builds based on a
yazi git commit. It also uploads the build as a workflow artifact so other jobs in the same run can
reuse it via [restore-nightly](restore-nightly/action.yml) instead of rebuilding.

## [restore-nightly](restore-nightly/action.yml)

[restore-nightly](restore-nightly/action.yml) downloads and extracts the artifact published by
[build-nightly](build-nightly/action.yml), adding `yazi` and `ya` to the `PATH` without rebuilding.
It is meant for other jobs of the same workflow run, and fails loudly if no matching build exists or
the extracted version does not report the expected commit.
