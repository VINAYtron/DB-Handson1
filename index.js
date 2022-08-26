> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
> db
Human_Resource
> db.employee.insertMany( [ {firstName : "John", lastName : "Doe", salary : 25000, department : "HR", lastCompany : "X", lastSalary : 10000, overallExp : 2, contactInfo : 1234567890, yearGrad : 2016, gradStream : "CSE"}, {firstName : "Rohan", lastName : "Jame", salary : 30000, department : "Technical", lastCompany : "Y", lastSalary : 15000, overallExp : 1, contactInfo : 1234567860, yearGrad : 2015, gradStream : "CSE"}, {firstName : "Jame", lastName : "Doe", salary : 35000, department : "Accounts", lastCompany : "Z", lastSalary : 20000, overallExp : 1, contactInfo : 1234567890, yearGrad : 2019, gradStream : "ECE"}, {firstName : "Sao", lastName : "Avika", salary : 30000, department : "Sales", lastCompany : "Y", lastSalary : 15000, overallExp : 2, contactInfo : 1234567860, yearGrad : 2015, gradStream : "CSE"}, {firstName : "Jame", lastName : "roh", salary : 35000, department : "Accounts", lastCompany : "Z", lastSalary : 15000, overallExp : 2, contactInfo : 123567890, yearGrad : 2019, gradStream : "EEE"}, {firstName : "Rohan", lastName : "Jame", salary : 30000, department : "Technical", lastCompany : "Y", lastSalary : 15000, overallExp : 1, contactInfo : 1234567860, yearGrad : 2015, gradStream : "CSE"}, {firstName : "Jame", lastName : "Doe", salary : 35000, department : "Accounts", lastCompany : "Z", lastSalary : 20000, overallExp : 1, contactInfo : 123567890, yearGrad : 2019, gradStream : "ECE"}, {firstName : "Sao", lastName : "Avika", salary : 30000, department : "Sales", lastCompany : "Y", lastSalary : 15000, overallExp : 2, contactInfo : 1234567860, yearGrad : 2015, gradStream : "CSE"}, {firstName : "Jame", lastName : "Doe", salary : 35000, department : "Accounts", lastCompany : "Z", lastSalary : 15000, overallExp : 2, contactInfo : 123567890, yearGrad : 2019, gradStream : "EEE"}, {firstName : "Rohan", lastName : "Jame", salary : 30000, department : "Technical", lastCompany : "Y", lastSalary : 15000, overallExp : 1, contactInfo : 1234567860, yearGrad : 2015, gradStream : "CSE"}, {firstName : "Jame", lastName : "Doe", salary : 35000, department : "Accounts", lastCompany : "Z", lastSalary : 20000, overallExp : 1, contactInfo : 123567890, yearGrad : 2019, gradStream : "ECE"}, {firstName : "Sao", lastName : "Avika", salary : 30000, department : "Sales", lastCompany : "Y", lastSalary : 15000, overallExp : 2, contactInfo : 1234567860, yearGrad : 2015, gradStream : "CSE"}, {firstName : "Jame", lastName : "Doe", salary : 35000, department : "Accounts", lastCompany : "Z", lastSalary : 15000, overallExp : 2, contactInfo : 123567890, yearGrad : 2019, gradStream : "EEE"} ] )
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("6308b996e4957652a72376f5"),
                ObjectId("6308b996e4957652a72376f6"),
                ObjectId("6308b996e4957652a72376f7"),
                ObjectId("6308b996e4957652a72376f8"),
                ObjectId("6308b996e4957652a72376f9"),
                ObjectId("6308b996e4957652a72376fa"),
                ObjectId("6308b996e4957652a72376fb"),
                ObjectId("6308b996e4957652a72376fc"),
                ObjectId("6308b996e4957652a72376fd"),
                ObjectId("6308b996e4957652a72376fe"),
                ObjectId("6308b996e4957652a72376ff"),
                ObjectId("6308b996e4957652a7237700"),
                ObjectId("6308b996e4957652a7237701")
        ]
}
> db.employee.find().pretty()
{
        "_id" : ObjectId("6308b996e4957652a72376f5"),
        "firstName" : "John",
        "lastName" : "Doe",
        "salary" : 25000,
        "department" : "HR",
        "lastCompany" : "X",
        "lastSalary" : 10000,
        "overallExp" : 2,
        "contactInfo" : 1234567890,
        "yearGrad" : 2016,
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("6308b996e4957652a72376f6"),
        "firstName" : "Rohan",
        "lastName" : "Jame",
        "salary" : 30000,
        "department" : "Technical",
        "lastCompany" : "Y",
        "lastSalary" : 15000,
        "overallExp" : 1,
        "contactInfo" : 1234567860,
        "yearGrad" : 2015,
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("6308b996e4957652a72376f7"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : 35000,
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : 20000,
        "overallExp" : 1,
        "contactInfo" : 1234567890,
        "yearGrad" : 2019,
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("6308b996e4957652a72376f8"),
        "firstName" : "Sao",
        "lastName" : "Avika",
        "salary" : 30000,
        "department" : "Sales",
        "lastCompany" : "Y",
        "lastSalary" : 15000,
        "overallExp" : 2,
        "contactInfo" : 1234567860,
        "yearGrad" : 2015,
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("6308b996e4957652a72376f9"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : 35000,
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : 15000,
        "overallExp" : 2,
        "contactInfo" : 123567890,
        "yearGrad" : 2019,
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("6308b996e4957652a72376fa"),
        "firstName" : "Rohan",
        "lastName" : "Jame",
        "salary" : 30000,
        "department" : "Technical",
        "lastCompany" : "Y",
        "lastSalary" : 15000,
        "overallExp" : 1,
        "contactInfo" : 1234567860,
        "yearGrad" : 2015,
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("6308b996e4957652a72376fb"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : 35000,
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : 20000,
        "overallExp" : 1,
        "contactInfo" : 123567890,
        "yearGrad" : 2019,
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("6308b996e4957652a72376fc"),
        "firstName" : "Sao",
        "lastName" : "Avika",
        "salary" : 30000,
        "department" : "Sales",
        "lastCompany" : "Y",
        "lastSalary" : 15000,
        "overallExp" : 2,
        "contactInfo" : 1234567860,
        "yearGrad" : 2015,
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("6308b996e4957652a72376fd"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : 35000,
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : 15000,
        "overallExp" : 2,
        "contactInfo" : 123567890,
        "yearGrad" : 2019,
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("6308b996e4957652a72376fe"),
        "firstName" : "Rohan",
        "lastName" : "Jame",
        "salary" : 30000,
        "department" : "Technical",
        "lastCompany" : "Y",
        "lastSalary" : 15000,
        "overallExp" : 1,
        "contactInfo" : 1234567860,
        "yearGrad" : 2015,
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("6308b996e4957652a72376ff"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : 35000,
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : 20000,
        "overallExp" : 1,
        "contactInfo" : 123567890,
        "yearGrad" : 2019,
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("6308b996e4957652a7237700"),
        "firstName" : "Sao",
        "lastName" : "Avika",
        "salary" : 30000,
        "department" : "Sales",
        "lastCompany" : "Y",
        "lastSalary" : 15000,
        "overallExp" : 2,
        "contactInfo" : 1234567860,
        "yearGrad" : 2015,
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("6308b996e4957652a7237701"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : 35000,
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : 15000,
        "overallExp" : 2,
        "contactInfo" : 123567890,
        "yearGrad" : 2019,
        "gradStream" : "EEE"
}
> db.employee.find({salary:{$gt:"30000"}})
> db.employee.find({salary:{$gt:30000}})
{ "_id" : ObjectId("6308b996e4957652a72376f7"), "firstName" : "Jame", "lastName" : "Doe", "salary" : 35000, "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : 20000, "overallExp" : 1, "contactInfo" : 1234567890, "yearGrad" : 2019, "gradStream" : "ECE" }
{ "_id" : ObjectId("6308b996e4957652a72376f9"), "firstName" : "Jame", "lastName" : "roh", "salary" : 35000, "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : 15000, "overallExp" : 2, "contactInfo" : 123567890, "yearGrad" : 2019, "gradStream" : "EEE" }
{ "_id" : ObjectId("6308b996e4957652a72376fb"), "firstName" : "Jame", "lastName" : "Doe", "salary" : 35000, "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : 20000, "overallExp" : 1, "contactInfo" : 123567890, "yearGrad" : 2019, "gradStream" : "ECE" }
{ "_id" : ObjectId("6308b996e4957652a72376fd"), "firstName" : "Jame", "lastName" : "Doe", "salary" : 35000, "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : 15000, "overallExp" : 2, "contactInfo" : 123567890, "yearGrad" : 2019, "gradStream" : "EEE" }
{ "_id" : ObjectId("6308b996e4957652a72376ff"), "firstName" : "Jame", "lastName" : "Doe", "salary" : 35000, "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : 20000, "overallExp" : 1, "contactInfo" : 123567890, "yearGrad" : 2019, "gradStream" : "ECE" }
{ "_id" : ObjectId("6308b996e4957652a7237701"), "firstName" : "Jame", "lastName" : "Doe", "salary" : 35000, "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : 15000, "overallExp" : 2, "contactInfo" : 123567890, "yearGrad" : 2019, "gradStream" : "EEE" }
> db.employee.find({overallExp:{$gt:2}})
> db.employee.find({yearGrad:{$gt:2015},overallExp:{$gt:1}})
{ "_id" : ObjectId("6308b996e4957652a72376f5"), "firstName" : "John", "lastName" : "Doe", "salary" : 25000, "department" : "HR", "lastCompany" : "X", "lastSalary" : 10000, "overallExp" : 2, "contactInfo" : 1234567890, "yearGrad" : 2016, "gradStream" : "CSE" }
{ "_id" : ObjectId("6308b996e4957652a72376f9"), "firstName" : "Jame", "lastName" : "roh", "salary" : 35000, "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : 15000, "overallExp" : 2, "contactInfo" : 123567890, "yearGrad" : 2019, "gradStream" : "EEE" }
{ "_id" : ObjectId("6308b996e4957652a72376fd"), "firstName" : "Jame", "lastName" : "Doe", "salary" : 35000, "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : 15000, "overallExp" : 2, "contactInfo" : 123567890, "yearGrad" : 2019, "gradStream" : "EEE" }
{ "_id" : ObjectId("6308b996e4957652a7237701"), "firstName" : "Jame", "lastName" : "Doe", "salary" : 35000, "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : 15000, "overallExp" : 2, "contactInfo" : 123567890, "yearGrad" : 2019, "gradStream" : "EEE" }
> db.employee.updateMany({salary:{$gt:70000}},{$set:{salary:65000}})
{ "acknowledged" : true, "matchedCount" : 0, "modifiedCount" : 0 }
> db.employee.deleteMany({lastCompany:"Y"})
{ "acknowledged" : true, "deletedCount" : 6 }