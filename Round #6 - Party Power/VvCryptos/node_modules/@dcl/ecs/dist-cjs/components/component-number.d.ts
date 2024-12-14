export declare const MAX_STATIC_COMPONENT: number;
/**
 * All components that are not part of the coreComponentMappings MUST yield
 * a componentNumber (componentId) greather than MAX_STATIC_COMPONENT.
 * For that reason, we simply add MAX_STATIC_COMPONENT and trim to the domain 2^32
 */
export declare function componentNumberFromName(componentName: string): number;
