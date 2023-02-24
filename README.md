# **42-PM** (42 Progress Monitor)

![LoginPage](https://github.com/bassamnaji/ft-progress-monitor/blob/back-end/loginPage.png?raw=true)

## **Project Summary:**

This project was developed for use by 42 Abu Dhabi to monitor (both individual and group) student progress as per the current pace system implemented.

Students can also monitor their personal progress against the pace system and blackhole. Students will have a study plan generated that adjusts its timelines as per the pace selected by the student while also suggesting deadlines.

Staff can view individual student progress and view their chosen pace and their actual pace. Staff will be alerted to any students who are at risk, or appear at risk based on calculations using the Pace and Blackhole. Staff can also view progress and performance of the student body.

Students will view their personal profile pages which will show them their number of hours per week, their current project, their last submitted project, and their study plan based on the pace selected.

**Developers:**

-   Bassam Naji - _bnaji_
-   Hussain Awadh - _hawadh_
-   Hadi Kaddoura - _hakaddou_
-   Mohammed Patel - _mpatel_
    <br><br/>

# Quick-start instructions:

### **Create** `.env` & check if docker is available on machine:

```
$ ./scripts/setup.sh
```

### To **start** up project run:

```
$ npm run docker:build:dev
```

### **_Or run_**:

```
# latest version of docker compose
$ docker compose up

# Or using the old version of docker compose
$ docker-compose build
$ docker-compose up
```

### To **stop** project run:

```
$ npm run docker:wipe:data
```

### To **_full wipe database and stop_** project run:

**_(ATTENTION)_**

```
$ npm run docker:full:wipe
```

Will run on `localhost`. All requests that start with `/api` will be redirected to the **backend**, while the rest will go to **frontend**.

For example:

**Backend:** `localhost/api` - `localhost/api/users`<br>
**Frontend:** `localhost` - `localhost/login`
<br><br/>

# Project Details

## **Wire Frame**

![Wire Frame](https://github.com/bassamnaji/ft-progress-monitor/blob/back-end/wireFrame.png?raw=true)

### **Staff Use Case**

**On Login:**

1.  Will Authenticate with 42 API:

    1.1 Staff will see a Dashboard with statistics, notifications, and a search bar:

    -   Notifications will notify staff of:

        -   Students at risk.
        -   Students inactive for a period of > 2 weeks.
        -   Students who activate freeze AGU.
        -   Students with exam > 6 attempts.
        -   Students falling out of pace 18.
            <br><br/>

    -   Search Bar:

        -   Searches for individual student profiles.
            <br><br/>

    -   Filters:

        -   Filter by circle.
        -   Filter by Pace.
        -   Filter by at risk.
        -   Filter by nationality.
        -   Filter by projects.
            <br><br/>

    -   Statistics

        -   View graphics based on filters above. (Pie Charts/Bar/Line Graphs)
        -   View graphics of total.
        -   Dang-o-meter per student.
            -   A meter component with an arrow that moves green to red, that indicates at risk or on pace.
        -   Dang-o-meter per circle.
            -   A meter component with an arrow that moves green to red, that indicates at risk or on pace.
        -   Dang-o-meter per filters above.
            -   A meter component with an arrow that moves green to red, that indicates at risk or on pace.
                <br><br/>

2.  Student Profiles (\*Same as student view, see Below):

    -   List all students:

        -   Based on filters mentioned above.
        -   All students.
            <br><br/>

    -   View single student profile.
        -   View student study plan.
            <br><br/>

_Note: Staff can view all student profiles._
<br><br/>

### **Student Use Case:**

**On Login:**

1.  Will authorise with 42 API Authentication:

    1.1 Will search for student in **42-PM** Database:

    -   If user found, will fetch user data, else will create new user entry in Database and send data.

    -   Note: If user does not exist on **42-PM** Database, the process of creating the user for the **42-PM** database is automated. If new students join the cursus, they simply have to login for the first time.
        <br><br/>

2.  Student will be redirected to their profile:

    2.1 Student can view their details:

    -   Basic Profile includes:

        -   Kick-off date.
        -   Blackhole days/date.
        -   Pace Calculated.
        -   Student Target Pace by selection.
        -   Last project Submitted.
        -   Current project in progress.
        -   Progress in graphical form (Bar/Line Graph).
        -   Number of hours per week.
            <br><br/>

    -   Study Plan Generated to contain all pace levels (Based on Pace selected and kick-off):

        -   Displays all circles with all projects.
        -   Suggested Deadlines.
        -   Suggests number of hours daily to spend.
            <br><br/>

    -   Dang-o-meter (Based on Pace and Kick-off):

        -   A meter component With an arrow that moves green to red.
        -   Alerts if falling out of current pace.
            <br><br/>

    -   Alerts for blackhole absorption imminent.
        -   Note: These alerts will also notify staff.
            <br><br/>

_Note: Students only have access to their profile._
<br><br/>

# Technical Details:

## Routes:

1.  Auth routes: `'/auth'`

    -   `'/auth'`:
        -   Authenitcates user and returns access tokens.
        -   Checks and assigns role === staff ? true : false.
        -   If user authenticated but does not exist, it will create new user.
            <br><br/>

2.  User Routes: `'/users'` **_(Role Guards Implemented)_**

    -   `'users/all'`:

        -   Staff Role required
        -   Checks role of user, if staff:
            -   returns all students users `'isStaff == false'`
                <br><br/>

    -   `'/users/search/:id'`:

        -   Requires student id (number) from intra.
        -   Checks role if staff or student.
        -   Searches for user by id:
            -   Only shows student profile if Role == student.
            -   If Role == Staff, can search any user.
                <br><br/>

    -   `'/users/remove/:id'`:

        -   Requires Role == Staff
        -   Requires student id (number) from intra.
        -   If staff, allows deletion of student.
        -   Cannot delete staff account.
            <br><br/>

    -   `'/users/update/:id'`:

        -   Requires student id (number) from intra.
        -   Allows update of profile:
            -   If Role == Staff updates any user profile (Yet to implement guards against updating other Staff Profiles).
            -   If Role == Student, only student profile updates. (Yet to implement guards against updating other students)
            -   If changes found from 42API.
                <br><br/>

    -   `'/users/all/project'`: **_(Temporary)_**

        -   Requires Role == Staff
        -   Requires project name (string) to search.
        -   Allows call all users by project.
            -   _Can be used for filters temporarily_
                <br><br/>

3.  Project Routes: `'/projects'` **_(Non-Functional)_**

    -   `'/projects/all'`:

        -   List all users on specific project.
            <br><br/>

    -   `'/projects/validated'`:

        -   List all user validated specific project.
            <br><br/>

    -   `'/projects/in-progress'`:
        -   List all users in-progress on specific project.
            <br><br/>

_Note: Students can only view their projects data._
<br><br/>

# Technologies:

## Back-end:

-   NestJS
-   TypeORM
-   Postgresql
    <br><br/>

## Front-end:

-   nuxt
-   **_to fill_**
-   **_to fill_**
    <br><br/>

## Server Details:

-   **_to fill_**
-   **_to fill_**
    <br><br/>
