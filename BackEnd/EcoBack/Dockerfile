##./Dockerfile 
FROM python:3.9-slim
WORKDIR /usr/src/app

# 필요한 패키지 설치
RUN apt-get update && apt-get install -y libgl1-mesa-glx libzbar0 build-essential python3-dev libssl-dev

# 패키지 설치
COPY requirements.txt ./
RUN pip install --upgrade pip && pip install -r requirements.txt

# django 사용자 생성
RUN adduser --disabled-password --no-create-home django

# 소스 파일 복사
COPY . .

# 데이터베이스 파일 권한 설정
RUN chown -R django:django db.sqlite3

# django 사용자로 전환
USER django

# EXPOSE 8000 # 필요하다면 주석 해제
CMD ["uwsgi", "--socket", ":9000", "--workers", "4", "--master", "--enable-threads", "--module", "EcoBack.wsgi:application"]
