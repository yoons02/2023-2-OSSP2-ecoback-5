##./Dockerfile 
FROM python:3.9-slim                            
WORKDIR /usr/src/app                    

RUN apt-get update && apt-get install -y libgl1-mesa-glx

# 필요한 라이브러리 설치
RUN apt-get update && apt-get install -y libzbar0

## Install packages 
COPY requirements.txt ./                
RUN pip install -r requirements.txt     

## Copy all src files 
COPY . .                                
## Run the application on the port 8080 
EXPOSE 8000                             

#CMD ["python", "./setup.py", "runserver", "--host=0.0.0.0", "-p 8080"] 
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "EcoBack.wsgi:application"] 
