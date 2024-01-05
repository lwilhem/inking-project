import type { UserConfigItem } from '@antfu/eslint-config'

declare module '@inking/eslint-config' {
  function defineEslintConfig(): Promise<UserConfigItem[]>
  export default defineEslintConfig()
}
