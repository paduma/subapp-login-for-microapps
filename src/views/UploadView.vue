<template>
  <div>
    <h2>文件上传示例</h2>
    <input type="file" @change="onFileChange" />
    <button @click="uploadFile">上传文件</button>
    <p v-if="uploadProgress > 0">上传进度: {{ uploadProgress }}%</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      selectedFile: null,
      uploadProgress: 0,
    };
  },
  methods: {
    onFileChange(event) {
      // 选择文件时，将文件信息保存到组件的状态中
      this.selectedFile = event.target.files[0];
    },
    async uploadFile() {
      if (!this.selectedFile) {
        alert("请先选择一个文件");
        return;
      }

      const formData = new FormData();
      formData.append("file", this.selectedFile); // 将文件添加到表单数据中

      try {
        const API_URL = "/api";
        const response = await axios.post(`${API_URL}/upload`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            // 计算上传进度
            this.uploadProgress = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
          },
        });

        console.log("文件上传成功:", response.data);
        alert("文件上传成功");
      } catch (error) {
        console.error("文件上传失败:", error);
        alert("文件上传失败");
      }
    },
  },
};
</script>
<style scoped>
/* 可添加样式 */
</style>
