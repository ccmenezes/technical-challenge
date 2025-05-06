ARG VERSION=v1.51.0
FROM mrc.microsoft.com/playwright:${VERSION}

WORKDIR /app

COPY package.json package-lock.json ./

COPY . .

RUN npx -y playwright@${VERSION} install chromium --with-deps --only-shell
