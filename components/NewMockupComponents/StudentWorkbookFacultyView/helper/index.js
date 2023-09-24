export const getDetailedWorkbookData = (studentItem, lessonStates) => {
    let completedChapters = 0;
    let status = "Not Started";
    if(studentItem?.chapter1 !== null) completedChapters = completedChapters + 1;
    if(studentItem?.chapter2 !== null) completedChapters = completedChapters + 1;
    if(studentItem?.chapter3 !== null) completedChapters = completedChapters + 1;
    if(studentItem?.chapter4 !== null) completedChapters = completedChapters + 1;
    if(studentItem?.chapter5 !== null) completedChapters = completedChapters + 1;
    if(studentItem?.chapter6 !== null) completedChapters = completedChapters + 1;
    if(studentItem?.chapter7 !== null) completedChapters = completedChapters + 1;
    if(studentItem?.chapter8 !== null) completedChapters = completedChapters + 1;
    if(studentItem?.chapter9 !== null) completedChapters = completedChapters + 1;
    if(studentItem?.chapter10 !== null) completedChapters = completedChapters + 1;
    if(studentItem?.chapter11 !== null) completedChapters = completedChapters + 1;
    
    if(completedChapters > 0) status = "In Progress";
    if(completedChapters === 11) status = "Completed"
    // let completedLessons = JSON.parse(
    //     studentItem?.completedLessons 
    //   );
    // const completePercentage = parseInt(
    //     ((completedLessons && completedLessons.length) /
    //       (lessonStates)) *
    //       100
    // )

    let completePercentage = parseInt((completedChapters / 11) * 100);

    return {
        completedChapters,
        status,
        completePercentage
    }

}