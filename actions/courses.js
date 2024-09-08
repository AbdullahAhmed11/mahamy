'use server'
import { revalidatePath } from 'next/cache'
import axios from 'axios';


export async function getAllCourses() {
    try {
        const headers = {
            'Content-Type': 'application/json',
        };

        const payload = {
            courseName: "",
            unversityId: "",
            collageId: "",
            classId: "",
        };

        const res = await axios.post(
            "https://mobisite201.somee.com/api/Course/Select/All/Course/1/40", {},
            payload,
            { headers: headers }
        );
        revalidatePath('/courses')
        console.log(res.data.courses); // Log the response data
        return res.data.courses; // Return the student data from the response
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error after logging it
    }
}

//delete 
export async function deleteCourse(courseId) {
    try {
        // Make a DELETE request to the API
        const res = await axios.delete(`https://mobisite201.somee.com/api/Course/Delete/Course/${courseId}`);
        
        console.log(`Course with ID ${courseId} deleted successfully.`); // Log success
        revalidatePath('/courses')
        return res.data; // Return the response data (if any)
    } catch (error) {
        console.error('Error deleting student:', error);
        throw error; // Re-throw the error after logging it
    }
}

export const createCourse = async (formData) => {
    try {
        const response = await fetch("https://mobisite201.somee.com/api/Course/Insert/Course", {
            method: "POST",
            headers: {
                // 'Content-Type': 'multipart/form-data', // Not needed for FormData
            },
            body: formData,
        });


        revalidatePath('/courses')
        const data = await response.json();
        return data;
     
    } catch (error) {
        console.error("Error creating course:", error);
    }
}


export async function getUniversityCollegeClassData() {
    try {
        // Make a GET request to the API
        const res = await axios.get('https://mobisite201.somee.com/api/Student/Select/Unversity/Collage/Class');
        
        // Log the full response data
        console.log(res.data);
        
        // Extract and return the specific lists from the response
        const { unversityList, collageList, classList } = res.data;
        return { unversityList, collageList, classList };
    } catch (error) {
        console.error('Error fetching university, college, and class data:', error);
        throw error; // Re-throw the error after logging it
    }
}

//create lesson

export async function createLesson(lessonName, courseId, lessonDescription) {
    try {
        const body = {
            lessonName: lessonName,
            courseId: courseId,
            lessonDescription: lessonDescription
        };

        const response = await axios.post("https://mobisite201.somee.com/api/Course/Insert/lessson", body, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log("Lesson created successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error creating lesson:", error);
        throw error;
    }
}

//getCourse by id
export async function getCourseById(courseId) {
    try {
        const response = await axios.get(`https://mobisite201.somee.com/api/Course/Select/Course/${courseId}`, {
        });

        console.log("Course data retrieved successfully:", response.data);
        revalidatePath(`/course/${courseId}`)

        return response.data; // Return the course data
    } catch (error) {
        console.error("Error fetching course data:", error);
        throw error; // Re-throw the error after logging it
    }
}

//insert lecture
export async function createLecture({ lectureName, lectureDescription, lectureVideoLink, lessonId, lectureTypeId }) {
    try {
        const body = {
            lectureName,
            lectureDescription,
            lectureVideoLink,
            lessonId,
            lectureTypeId
        };

        const response = await axios.post("https://mobisite201.somee.com/api/Course/Insert/Lecture", body, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log("Lecture created successfully:", response.data);
        return response.data; // Return the response data
    } catch (error) {
        console.error("Error creating lecture:", error);
        throw error; // Re-throw the error after logging it
    }
}

// delete month 
export async function deleteMonth(lessonId) {
    try {
        // Make a DELETE request to the API
        const res = await axios.delete(`https://mobisite201.somee.com/api/Course/Delete/lessson/${lessonId}`);
        
        console.log(`Course with ID  deleted successfully.`); // Log success
        // revalidatePath(`/course/${courseId}`)
        return res.data; // Return the response data (if any)
    } catch (error) {
        console.error('Error deleting student:', error);
        throw error; // Re-throw the error after logging it
    }
}

//getStudent
export async function getStudent(studentName = "") {
    try {
        const body = {
            studentName: studentName // Send the student name in the body, default is an empty string
        };

        const response = await axios.post("https://mobisite201.somee.com/api/Student/Select/All/Student/", body, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log("Students retrieved successfully:", response.data);
        return response.data; // Return the student data
    } catch (error) {
        console.error("Error fetching students:", error);
        throw error; // Re-throw the error after logging it
    }
}
//insertStudentToCourse
export async function insertStudentToCourse(studentId, courseId) {
    try {
        const body = {
            studentId: studentId,
            courseId: courseId
        };

        const response = await axios.post("https://mobisite201.somee.com/api/Student/Insert/Student/In/Course", body, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log("Student inserted into course successfully:", response.data);
        return response.data; // Return the response data
    } catch (error) {
        console.error("Error inserting student into course:", error);
        throw error; // Re-throw the error after logging it
    }
}


export async function editMonth(lessonId, lessonName, lessonDescription, courseId) {
    try {
      const body = {
        lessonName: lessonName,
        lessonDescription: lessonDescription,
        courseId: courseId
      };
  
      // Make the PUT request to update the lesson
      const response = await axios.put(`https://mobisite201.somee.com/api/Course/Update/lessson/${lessonId}`, body, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      console.log("Lesson updated successfully:", response.data);
      return response.data; // Return the response data
    } catch (error) {
      console.error("Error updating lesson:", error);
      throw error; // Re-throw the error for further handling
    }
  }


  export const updateLecture = async (lectureId, updatedLectureData) => {
    try {
      const response = await fetch(`https://mobisite201.somee.com/api/Course/Update/Lecture/${lectureId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedLectureData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update lecture');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error updating lecture:', error);
      throw error;
    }
  };
  

  export const deleteLecture = async (lectureId) => {
    try {
      const response = await fetch(`https://mobisite201.somee.com/api/Course/Delete/Lecture/${lectureId}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete lecture');
      }
      revalidatePath(`/course/${courseId}`)
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error deleting lecture:', error);
      throw error;
    }
  };
  