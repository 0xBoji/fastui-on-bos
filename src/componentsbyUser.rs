use near_sdk::{
    collections::{LazyOption, LookupMap, UnorderedSet},
    near_bindgen,
    serde::{Deserialize, Serialize},
    AccountId, CryptoHash, PanicOnDefault,
  };
  
  use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
  use schemars::JsonSchema;
  
  use super::{
    space::{SpaceId, SpaceMetadata},
    thread::{ThreadId, ThreadMetadata},
    user::{JsonUser, UserId},
  };
  
  /// The `ThreadScoreContractMetadata` struct represents metadata for an ThreadScore contract.
  #[derive(BorshDeserialize, BorshSerialize, Serialize, Deserialize, Clone, JsonSchema)]
  #[serde(crate = "near_sdk::serde")]
  pub struct TitleWidgetBOS {
  
    /// Title of the Widget contract.
    pub title: String,
  
    pub symbol: String,
  }
  
  /// The `ThreadScoreContract` struct represents an ThreadScore Contract in the system.
  #[near_bindgen]
  #[derive(PanicOnDefault, BorshDeserialize, BorshSerialize)]
  pub struct saveComponents {
    pub owner_id: AccountId,
  }
  
  #[derive(BorshSerialize)]
  pub enum StorageKey {
    saveComponents,
    TitleWidgetBOS,
  }
  
  