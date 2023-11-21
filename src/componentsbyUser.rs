use near_sdk::{AccountId, Balance, Promise, WasmQuery};

#[derive(BorshDeserialize, BorshSerialize)]
struct Message {
  id: String,
  text: String,
}

#[near_contract]
pub struct FastuiSCTest {
  pub messages: Vec<Message>,
}

impl FastuiSCTest {
  pub fn new(owner: AccountId) -> Self {
    Self {
      messages: vec![],
    }
  }

  pub fn add_message(&mut self, message: Message) -> Promise {
    self.messages.push(message);
    self.save_messages()
  }

  pub fn get_messages(&self) -> Vec<Message> {
    self.messages.clone()
  }

  pub fn delete_message(&mut self, message_id: String) -> Promise {
    let index = self
      .messages
      .iter()
      .position(|message| message.id == message_id)
      .unwrap();
    self.messages.remove(index);
    self.save_messages()
  }

  fn save_messages(&self) -> Promise {
    let encoded_messages = near_sdk::serde_json::to_string(&self.messages).unwrap();
    self.env().storage().set("messages", encoded_messages).then(|_| {
      Promise::new(self.env().current_account_id())
    })
  }
}
