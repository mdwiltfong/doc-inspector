import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, Assistants } from "@gadget-client/doc-inspector";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultAssistantsServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly name: true;
    readonly description: true;
    readonly model: true;
    readonly instructions: true;
    readonly tools: true;
    readonly file_ids: true;
    readonly external_id: true;
};
/** All the data passed to an effect or precondition within the `create` action on the `assistants` model. */
export interface CreateAssistantsActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `assistants` record this action is operating on.
    */
    record: GadgetRecord<Select<Assistants, DefaultAssistantsServerSelection>>;
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
    params: {};
    /**
    * The context of this action. This context does not have a defined inner context.
    */
    context: CreateAssistantsActionContext;
}
/** All the data passed to an effect or precondition within the `update` action on the `assistants` model. */
export interface UpdateAssistantsActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `assistants` record this action is operating on.
    */
    record: GadgetRecord<Select<Assistants, DefaultAssistantsServerSelection>>;
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
    params: {};
    /**
    * The context of this action. This context does not have a defined inner context.
    */
    context: UpdateAssistantsActionContext;
}
/** All the data passed to an effect or precondition within the `delete` action on the `assistants` model. */
export interface DeleteAssistantsActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `assistants` record this action is operating on.
    */
    record: GadgetRecord<Select<Assistants, DefaultAssistantsServerSelection>>;
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
    params: {};
    /**
    * The context of this action. This context does not have a defined inner context.
    */
    context: DeleteAssistantsActionContext;
}
