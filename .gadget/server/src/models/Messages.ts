// All the generated types for the "messages" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, Messages } from "@gadget-client/doc-inspector";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultMessagesServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly thread_id: true;
      readonly role: true;
      readonly content: true;
      readonly file_ids: true;
      readonly assistant_id: true;
      readonly run_id: true;
  };

  
/** All the data passed to an effect or precondition within the `create` action on the `messages` model. */
export interface CreateMessagesActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `messages` record this action is operating on.
  */
  record: GadgetRecord<Select<Messages, DefaultMessagesServerSelection>>;
  /**
  * An object passed between all preconditions and effects of an action execution at the `scope` property.
  * Useful for transferring data between effects.
  */
  scope: ActionExecutionScope;
  /**
  * An object describing what started this action execution.
  */
  trigger: ActionTrigger;
  /**
  * An object containing all the incoming params that have been defined for this action. Includes params added by any triggers, as well as custom params defined in the action.
  */
  params: {

};
  /**
  * The context of this action. This context does not have a defined inner context.
  */
  context: CreateMessagesActionContext;
};


    
/** All the data passed to an effect or precondition within the `update` action on the `messages` model. */
export interface UpdateMessagesActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `messages` record this action is operating on.
  */
  record: GadgetRecord<Select<Messages, DefaultMessagesServerSelection>>;
  /**
  * An object passed between all preconditions and effects of an action execution at the `scope` property.
  * Useful for transferring data between effects.
  */
  scope: ActionExecutionScope;
  /**
  * An object describing what started this action execution.
  */
  trigger: ActionTrigger;
  /**
  * An object containing all the incoming params that have been defined for this action. Includes params added by any triggers, as well as custom params defined in the action.
  */
  params: {

};
  /**
  * The context of this action. This context does not have a defined inner context.
  */
  context: UpdateMessagesActionContext;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `messages` model. */
export interface DeleteMessagesActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `messages` record this action is operating on.
  */
  record: GadgetRecord<Select<Messages, DefaultMessagesServerSelection>>;
  /**
  * An object passed between all preconditions and effects of an action execution at the `scope` property.
  * Useful for transferring data between effects.
  */
  scope: ActionExecutionScope;
  /**
  * An object describing what started this action execution.
  */
  trigger: ActionTrigger;
  /**
  * An object containing all the incoming params that have been defined for this action. Includes params added by any triggers, as well as custom params defined in the action.
  */
  params: {

};
  /**
  * The context of this action. This context does not have a defined inner context.
  */
  context: DeleteMessagesActionContext;
};


  