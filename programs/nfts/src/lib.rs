use anchor_lang::prelude::*;

declare_id!("2Hz6Jr29XtJGMk2ae3ph4FWaug6aJn5WeYBHYpuecN6C");

#[program]
pub mod nfts {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
