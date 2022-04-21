# 使用 node 镜像
FROM node:15-alpine as builder

# 准备工作目录
WORKDIR /app

# 复制项目
COPY . .

# # 从 React container 里复制构建出来的文件
COPY --from=builder /app/dist /usr/share/nginx/html
