use anchor_lang::prelude::*;

// This is your program's public key and it will update
// automatically when you build the project.
declare_id!("7qXt8bxDbhDaMsGdL7nHVWEwPNtvBxQAjEgMyWB3J9iZ");

#[program]
mod hello_world {
    use super::*;

    pub fn say_hello(_ctx: Context<SayHello>) -> Result<()> {
        let counter = &mut _ctx.accounts.counter;
        counter.count += 1;
        msg!("Hello World");
        Ok(())
    }

    pub fn initialize_count(_ctx: Context<Initialize>) -> Result<()> {
        let counter = &mut _ctx.accounts.counter;
        counter.count = 0;
        msg!("Initialized new count. Current value: {}!", counter.count);
        Ok(())
    }
}

#[account]
pub struct Counter {
    count: u64,
}

#[derive(Accounts)]
pub struct SayHello<'info> {
    #[account(mut)]
    pub counter: Account<'info, Counter>,
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = signer, space = 8 + 8)]
    pub counter: Account<'info, Counter>,
    #[account(mut)]
    pub signer: Signer<'info>,
    pub system_program: Program<'info, System>,
}
