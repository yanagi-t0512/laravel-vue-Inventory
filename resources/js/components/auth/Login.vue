<script setup>
import axios from "axios";
import { ref, reactive } from "vue";
import User from "@/Helpers/User";

const form = reactive({
  email: '',
  password: ''
})

const login = () => {
  axios.post('/api/auth/login', form)
    .then(res => {
      console.log(res.data)
      User.responseAfterLogin(res)
    })
    .catch(error => {
      console.log(error.response.data)
    })
}

</script>


<template>
  <div class="row justify-content-center">
    <div class="col-xl-10 col-lg-12 col-md-9">
      <div class="card shadow-sm my-5">
        <div class="card-body p-0">
          <div class="row">
            <div class="col-lg-12">
              <div class="login-form">
                <div class="text-center">
                  <h1 class="h4 text-gray-900 mb-4">3.2Login</h1>
                </div>

                <form class="user" @submit.prevent="login">
                  <div class="form-group">
                    <input type="email" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
                      placeholder="Enter Email Address" v-model="form.email">
                  </div>

                  <div class="form-group">
                    <input type="password" class="form-control" id="exampleInputPassword" placeholder="Password"
                      v-model="form.password">
                  </div>

                  <div class="form-group">
                    <div class="custom-control custom-checkbox small" style="line-height: 1.5rem;">
                      <input type="checkbox" class="custom-control-input" id="customCheck">
                      <label class="custom-control-label" for="customCheck">Remember
                        Me</label>
                    </div>
                  </div>

                  <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-block">Login</button>
                  </div>


                </form>
                <hr>

                <div class="text-center">
                  <router-link to="/register" class="font-weight-bold small">
                    Create an Account!
                  </router-link>
                </div>
                <div class="text-center">
                  <router-link to="/forget" class="font-weight-bold small">
                    Forget Password
                  </router-link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
