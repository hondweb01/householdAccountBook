#ホットリロード対応版

#maven対応版のJavaを使用
FROM maven:3.9-eclipse-temurin-21
#作業ディレクトリ
WORKDIR /app
#依存関係の事前ダウンロード
COPY brApp/demo .
RUN mvn dependency:go-offline -B

#コンテナ起動時にMavenを使用してアプリケーションを実行
#CMD→デフォルトの実行コマンド ENTRYPOINT→強制実行コマンド
CMD [ "mvn", "spring-boot:run" ]
