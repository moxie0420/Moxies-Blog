{pkgs ? import <nixpkgs> {}}:
with pkgs;
  mkShell {
    NIX_LD_LIBRARY_PATH = lib.makeLibraryPath [
      nodejs-slim
      stdenv.cc.cc
    ];
    NIX_LD = lib.fileContents "${stdenv.cc}/nix-support/dynamic-linker";

    nativeBuildInputs = [
      nodejs-slim
    ];
    buildInputs = [
      yarn
    ];
  }
