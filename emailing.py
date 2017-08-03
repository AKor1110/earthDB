import smtplib as sm
import csv
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import cgi

class GetEmail:
    def __init__(self):
        self.form = cgi.FieldStorage()
    def getEmail(self):
        return self.form.getValue("email")

#Simple Mail Transfer Protocol
class SendEmail:
    def __init__(self, user, password, recipient, plainText, HTML, subject):
        self.user = user
        self.password = password
        self.recipient = recipient
        self.message = MIMEMultipart("alternative")
        self.message["Subject"] = subject
        self.message["From"] = self.user
        self.message["To"] = self.recipient
        part1 = MIMEText(plainText, "text")
        part2 = MIMEText(HTML, "html")
        #self.message.attach(part1)
        self.message.attach(part2)

    def Send(self):
        server = sm.SMTP_SSL("localhost", 465, timeout = 15)
        server.login(self.user, self.password)
        server.sendmail(self.user, self.recipient, self.message.as_string())
        server.quit()
        print "Email sent!"

class DataBase:
    def __init__(self, File):
        self.file = File
        self.info = []
        self.newline = []
        self.dataBaseInfo = []
        
    #takes out all the commas in the data
    def filterStorage(self):
        for word in self.dataBaseInfo:
            if word == "," or word == " ":
                self.dataBaseInfo.remove(word)

    #method that prints out the dataBase information
    def readInfo(self):
        with open(self.file, "rb") as dataBase:
            read = csv.reader(dataBase)
            for word in read:
                if word == self.newline:
                    continue
                else:
                    string =  ",".join(word)
                    print string
                    self.dataBaseInfo = string.split(",")
                    self.filterStorage()
                    
    def writeInfo(self):
        with open(self.file, "wb") as dataBase:
            write = csv.writer(dataBase)
            last_num = int(self.dataBaseInfo[0]) + 1
            write.writerow(str(last_num))

    #make method for getting each line of a text file
    def tipInfo(self, tip_number):
        with open(self.file, "rb") as f:
            current_line = 0 
            for line in f:
                if current_line == tip_number:
                    self.dataBaseInfo = line.split()
                    break
                current_line += 1


email_data = DataBase("data_base.csv")
email_data.readInfo() #reads all emails
emails = list(email_data.dataBaseInfo)

print "Final list of emails: "
print emails

tip_counter = DataBase("tip_number.csv")
tip_counter.readInfo()
tip_number = int(tip_counter.dataBaseInfo[0])
print "Tip Number: " + str(tip_number)

tip_data = DataBase("tips.csv")
tip_data.tipInfo(tip_number)
tips = " ".join(tip_data.dataBaseInfo) #concatenates the list
print "Current tip: " + tips

for email in emails:
    send = SendEmail("email", "password", email, "", """ <html> <body> <h1>Earth Dashboard</h1><h2>""" + tips +
                     """</h2> <br><br> <a href=\"earthdb.xyz/unsubscribe.php?unsubscribe=""" + email + """"\"">Unsubscribe</a></body></html>
                     """, "Earth Dashboard - Tip of the Day!")
    send.Send()

tip_counter.writeInfo()
