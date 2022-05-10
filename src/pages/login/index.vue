<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="form"
      :rules="rules"
      class="login-form center"
      label-position="right"
    >
      <div class="title-container">
        <h3 class="title">Login</h3>
      </div>

      <el-form-item prop="account">
        <!-- <span class="svg-container">
          <svg-icon name="user" />
        </span> -->
        <el-input
          v-model="form.account"
          placeholder="请输入用户名 admin | test"
          name="username"
          type="text"
          :prefix-icon="Avatar"
          @keyup.enter="handleLogin"
        />
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          v-model="form.password"
          :type="state.passwordType == 'password' ? 'password' : 'text'"
          placeholder="请输入密码"
          name="password"
          :prefix-icon="Lock"
          @keyup.enter="handleLogin"
        >
          <template #suffix>
            <svg-icon
              class="show-pwd"
              @click="showPwd"
              :name="state.passwordType === 'password' ? 'eye' : 'eye-open'"
            />
          </template>
        </el-input>
      </el-form-item>
      <el-button type="primary" style="width: 100%" @click.prevent="handleLogin"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { ElForm } from 'element-plus';
import { useUserStore } from '@/store/user';
import { View, Lock, Avatar } from '@element-plus/icons-vue';

const router = useRouter();
const store = useUserStore();

interface LoginForm {
  account: string;
  password: string;
}
interface LoginState {
  passwordType: string;
}

const state = reactive<LoginState>({
  passwordType: 'password',
});

const form = reactive<LoginForm>({
  account: '',
  password: '123456',
});

const rules = ref({
  account: [{ required: true, trigger: 'blur', message: '用户名不能为空' }],
  password: [
    { required: true, trigger: 'blur', message: '密码不能为空' },
    { min: 6, max: 30, trigger: 'blur', message: '密码长度不正确' },
  ],
});

const loginForm = ref<typeof ElForm>();
const handleLogin = async () => {
  const valid = await loginForm.value!.validate();
  if (valid) {
    await store.loginAction(form);
    const { redirect } = router.currentRoute.value.query;
    router.replace({
      path: (redirect as string) || '/',
    });
  }
};

const showPwd = () => {
  state.passwordType = state.passwordType === 'password' ? 'text' : 'password';
};
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}
.login-container {
  min-height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  background-color: $bg;
  overflow: hidden;

  :deep(.login-form) {
    width: 520px;
    max-width: 100%;
    padding: 0 35px;
    overflow: hidden;
    .el-input {
      width: 100%;
      height: 47px;
      .el-input__wrapper {
        background: transparent;
        box-shadow: none;
      }
      input {
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
        background: transparent;
        &:-webkit-autofill {
          box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: $cursor !important;
        }
      }
    }

    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    .el-form-item-none {
      border: none;
      background: none;
      border-radius: 0;
    }
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    cursor: pointer;
  }
}
</style>
