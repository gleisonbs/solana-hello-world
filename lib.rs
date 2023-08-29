use anchor_lang::prelude::*;

// This is your program's public key and it will update
// automatically when you build the project.
declare_id!("7qXt8bxDbhDaMsGdL7nHVWEwPNtvBxQAjEgMyWB3J9iZ");

#[program]
mod hello_world {
    use super::*;

    pub fn say_hello(_ctx: Context<SayHello>) -> Result<()> {
        msg!("Hello World");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct SayHello {}
