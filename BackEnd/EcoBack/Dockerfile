# Use an official Python runtime as a parent image
FROM python:3.9-slim                            

# Set the working directory in the container to /usr/src/app
WORKDIR /usr/src/app                    

# Install any needed packages specified in requirements.txt
RUN apt-get update && apt-get install -y libgl1-mesa-glx libzbar0 build-essential python3-dev libssl-dev
RUN pip install python-dateutil
RUN pip install --upgrade pip

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Install any needed packages using pip
RUN pip install -r requirements.txt

# Create a user 'django' to run the app
RUN adduser --disabled-password --no-create-home django

# Change the ownership of the working directory to the 'django' user
RUN chown -R django:django /usr/src/app

# Switch to 'django' user
USER django

# Run the application
CMD ["uwsgi", "--socket", ":9000", "--workers", "4", "--master", "--enable-threads", "--module", "EcoBack.wsgi:application"]
