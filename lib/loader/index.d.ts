/// <reference types="long" />
/// <reference types="webassembly-js-api" />
export declare enum LogType {
    LOG = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3,
}
export declare const arrayHeaderSize = 8;
export interface NumberAccessor {
    get(ptr: number): number;
    set(ptr: number, value: number): void;
}
export interface LongAccessor {
    get(ptr: number): Long;
    set(ptr: number, value: Long): void;
}
export interface ArrayAccessor {
    get(ptr: number): {
        capacity: number;
        length: number;
        base: number;
    };
    create(length: number, elementByteSize: number): {
        ptr: number;
        base: number;
    };
}
export interface StringAccessor {
    get(ptr: number): string;
    create(value: string): number;
}
export interface Memory extends WebAssembly.Memory {
    sbyte: NumberAccessor;
    s8: NumberAccessor;
    byte: NumberAccessor;
    u8: NumberAccessor;
    short: NumberAccessor;
    s16: NumberAccessor;
    ushort: NumberAccessor;
    u16: NumberAccessor;
    int: NumberAccessor;
    s32: NumberAccessor;
    uint: NumberAccessor;
    u32: NumberAccessor;
    long: LongAccessor;
    s64: LongAccessor;
    ulong: LongAccessor;
    u64: LongAccessor;
    float: NumberAccessor;
    f32: NumberAccessor;
    double: NumberAccessor;
    f64: NumberAccessor;
    array: ArrayAccessor;
    string: StringAccessor;
}
export interface Imports {
    [key: string]: any;
}
export interface Exports {
    [key: string]: any;
    ready: Promise<Module>;
}
export interface Module {
    imports: Imports;
    exports: Exports;
    memory: Memory;
    log: (type: LogType, message: string) => void;
}
export declare function initializeMemory(memoryInstance: WebAssembly.Memory, malloc: (n: number) => number, memset: (d: number, i: number, n: number) => number): Memory;
export interface LoadOptions {
    memory?: WebAssembly.Memory;
    imports?: {
        [key: string]: any;
    };
    exports?: {
        [key: string]: any;
    };
}
export declare function load(file: string | Uint8Array | ArrayBuffer, options?: LoadOptions): Promise<Module>;
export { load as default };
export declare const xfetch: typeof fetch;
