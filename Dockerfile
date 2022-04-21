# 使用 node 镜像
FROM node:15-alpine as builder

# 准备工作目录
WORKDIR /app

# 复制项目
COPY . .

# 准备 nginx
FROM nginx

# 自定义 nginx 设置文件
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf

# 从 React container 里复制构建出来的文件
COPY --from=builder /app/dist /usr/share/nginx/html

# 添加运行权限
RUN chown nginx.nginx /usr/share/nginx/html/ -R

# 暴露端口
EXPOSE 80