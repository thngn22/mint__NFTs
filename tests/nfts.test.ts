import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Nfts } from "../target/types/nfts";

import * as web3 from "@solana/web3.js";
import { BN } from "@coral-xyz/anchor";
import privateKey from "../privateKey.json";

describe("nfts", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.Nfts as Program<Nfts>;
  const payer = web3.Keypair.fromSecretKey(Uint8Array.from(privateKey));

  it("Creates a single NFT", async () => {
    const id = new BN(3);
    const name = "THANG NFT";
    const symbol = "TNT";
    const uri =
      "https://gateway.pinata.cloud/ipfs/QmNj6pErsf4QHMfiqXH6xem3U9r48f3QJ8Tzffa8Z5D3h3";

    const tx = await program.methods
      .createSingleNft(id, name, symbol, uri)
      .accounts({
        authority: payer.publicKey,
        payer: payer.publicKey,
      })
      .signers([payer, payer])
      .rpc()
      .catch((data) => console.log(data));

    console.log("Transaction Signature:", tx);
  });
});
