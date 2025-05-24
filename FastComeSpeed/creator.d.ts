
// creator.d.ts
// Minimal Cocos Creator 2.4.8 TypeScript declarations (simplified mock for compatibility)
declare module cc {
    export class Component {}
    export class Node {
        position: Vec3;
        active: boolean;
        scene: Node;
        getComponent<T>(type: { prototype: T }): T;
        getChildByName(name: string): Node;
    }
    export class Vec3 {
        static ZERO: Vec3;
    }
    export class Label {
        string: string;
    }
    export class Collider {}
    export class Collider2D {}
    export class Contact2DType {}
    export class IPhysics2DContact {}
}
declare function require(name: string): any;
