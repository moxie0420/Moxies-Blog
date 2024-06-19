{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    devenv.url = "github:cachix/devenv";
  };

  nixConfig = {
    extra-trusted-public-keys = "devenv.cachix.org-1:w1cLUi8dv3hnoSPGAuibQv+f9TZLr6cv/Hm9XgU50cw=";
    extra-substituters = "https://devenv.cachix.org";
  };

  # 28C36EF6RXM1BA2AEANA9BUM

  outputs = {
    self,
    nixpkgs,
    devenv,
    ...
  } @ inputs: let
    pkgs = nixpkgs.legacyPackages."x86_64-linux";
  in {
    devShell.x86_64-linux = devenv.lib.mkShell {
      inherit inputs pkgs;
      modules = [
        ({
          pkgs,
          config,
          ...
        }: {
          env = {
            NGROK_TOKEN = "1Pxb6kSw01K4SK8yorCzBjAn5X3_3QZ9ShyjYuWeGwYGdvSqS";
            NGROK_ULR = "https://wasp-huge-nicely.ngrok-free.app";

            R2_ACCOUNT_ID = "8d4841648459396e69b3c04c38704ab9";
            R2_ACCESS_KEY_ID = "c86c94fd58657cef385fa7a08f36592c";
            R2_ACCESS_KEY = "9848caede656c062e97af4709c0457117519f73bd0218863b5392f8c4cf692af";
            R2_PUBLIC_URL = "https://pub-02cfa73627054372a55da7fdd7f55a1f.r2.dev";
          };

          languages.javascript = {
            enable = true;
            bun.enable = true;
            npm = {
              enable = true;
              package = pkgs.nodePackages_latest.nodejs;
            };
          };

          # This is your devenv configuration
          packages = with pkgs; [
            nodePackages_latest.prettier
          ];

          scripts = {
            run.exec = "bun --bun run dev";
            setup.exec = ''
              bun i
            '';
            build.exec = ''
              
            '';
          };
        })
      ];
    };
  };
}
