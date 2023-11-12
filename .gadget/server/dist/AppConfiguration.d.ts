/**
* A map from configuration value name to value all the configuration values and secrets in doc-inspector.
* __Note__: Any encrypted configuration values are decrypted and ready for use in this map.
*/
export interface AppConfiguration {
    /**
    * The value for the NODE_ENV set in the Gadget Environment Variables settings section.
    */
    NODE_ENV: string;
    /**
    * The value for the OPENAI_API_KEY set in the Gadget Environment Variables settings section. Decrypted from the encrypted value for use here.
    */
    OPENAI_API_KEY: string;
}
