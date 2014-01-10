Chrome security disable 
--disable-web-security
-–allow-file-access-from-files

ssh -i /Users/sudhir/Projects/trials/keys-certificates/ec2-tortlets.pem ubuntu@54.200.65.103
sftp -i /Users/sudhir/Projects/trials/keys-certificates/ec2-tortlets.pem ubuntu@54.200.65.103

http://localhost:8080/tortlets/tortlets/json?find=ByUseridEqualsAndCompleted&userid=sudhir

http://tortlets.cloudfoundry.com/tortlets/json?find=ByUseridEqualsAndCompleted&userid=sudhir


Design Principles Notes:
15th Feb : 
*In future- Override all PUT,POST methods and based on ROLE, either use finder method or get all entities. (For example get all Dreams)
*Finder always assume, finding based on userid attribute.
*But if there is any finding, use directly finder url (For example isCompleted, find using date). In this case there will be two internal finders, one with userid and other without. if sent user is admin, use the later one.
