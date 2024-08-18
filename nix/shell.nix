{pkgs ? import <nixpkgs> {}}:
with pkgs;
  mkShell {
    buildInputs = [
      wrangler
      yarn
      nodejs-slim
    ];

    shellHook = ''
      yarn install
    '';
  }
