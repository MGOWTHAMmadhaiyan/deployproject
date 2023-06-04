<template>
    <el-row class="totaldiv">
        <el-card class="card">
            <el-row>
                <h3>MB TO GB</h3>
            </el-row>
        <el-form>
            <el-col :span="11">
                <el-form-item label="MB">
                    <el-input v-model="mb" placeholder="MB"></el-input>
                </el-form-item>
            </el-col>
            <br>
            <br>
            <br>
            <el-col :span="11">
                <el-form-item label="GB">
                    <el-input v-model="gb" placeholder="GB"></el-input>
                </el-form-item>
            </el-col>
            <el-col>
                <el-button @click="reset">RESET</el-button>
                <el-button @click="convert">CONVERT</el-button>
            </el-col>
        </el-form>
    </el-card>

    </el-row>
</template>
<script>
export default {
    name: "CalculationPage",
    props: {
        parentName: { type: String, default: 'tttt' }
    },
    data() {
        return {
            mb: '',
            gb: ''
        }
    },
    methods: {
        convert() {
            this.gb = this.mb / 1024
            this.mb=''
            setTimeout(console.log('5000'), 5000)
            console.log(this)

        },
        reset() {
            this.gb = ''
            this.mb = ''
        }
    }
}
</script>
<style>
/* #secondinput {
    margin-top: 42px;
    margin-left: -337px;
} */
.totaldiv{
    margin: auto;
  width: 70%;
}
.card{
    width:90%
}
</style>