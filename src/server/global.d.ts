import type { MongoClient } from "mongodb";

declare global {
  // global이라는 이름의 전역 객체가 가질 수 있는 속성 정의 (typescript는 속성을 명시해야하니까)
  namespace globalThis {
    var _mongo: Promise<MongoClient>;
  }
}
