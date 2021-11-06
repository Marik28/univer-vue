/**
 * @typedef {Number} Integer
 * 
 * @typedef {Object} Assignment
 * @property {LessonSubject} subject
 * @property {String} complete_before
 * @property {?String} description
 * @property {String} title
 * @property {Boolean} is_important
 * @property {Boolean} archived
 * @property {Group} group
 * @property {Subgroup} subgroup
 * @property {Integer} id
 * 
 * @typedef {Object} Body_update_student_assignment_students__student_id__assignments__student_assignment_id__patch
 * @property {Boolean} done
 * 
 * @typedef {String} Building
 * Перечисление корпусов университета
 * 
 * @typedef {Object} ClassRoom
 * Модель, описывающая аудиторию
 * @property {Integer} number - Номер аудитории
 * @property {Building} building - Корпус университета, в котором находится аудитория
 * @property {Integer} id
 * 
 * @typedef {Object} Group
 * Модель, описывающая группу
 * @property {String} name - Название группы
 * @property {Integer} id
 * 
 * @typedef {Object} HTTPValidationError
 * @property {?Array<ValidationError>} detail
 * 
 * @typedef {Object} Lesson
 * Модель, описывающая пару
 * @property {LessonSubject} subject - Предмет, по которому проходит пара
 * @property {Teacher} teacher - Преподаватель, который ведет пару
 * @property {?ClassRoom} classroom - Аудитория, в которой проходит пара
 * @property {Group} group - Группа, у которой проходит пара
 * @property {Subgroup} subgroup - Подгруппа, у которой проходит пара
 * @property {LessonKind} kind - Тип занятия
 * @property {WeekDay} day - День недели, в который проходит пара, в виде перечисления
 * @property {Parity} parity - Четность недели, в которую проходит пара
 * @property {String} time - Время прохождения пары
 * @property {Integer} id
 * 
 * @typedef {String} LessonKind
 * Перечисление типов пары
 * 
 * @typedef {Object} LessonSubject
 * Модель, описывающая предмет
 * @property {String} name - Название предмета
 * @property {Integer} id
 * 
 * @typedef {String} Parity
 * Перечисление вариантов четности пары (числитель, знаменатель или всегда)
 * 
 * @typedef {Object} Student
 * @property {Integer} telegram_id
 * @property {Subgroup} subgroup
 * @property {Group} group
 * 
 * @typedef {Object} StudentAssignment
 * @property {Assignment} assignment
 * @property {Student} student
 * @property {Boolean} done
 * @property {Integer} id
 * 
 * @typedef {Object} StudentCreate
 * @property {Integer} telegram_id
 * @property {Subgroup} subgroup
 * @property {String} group_name
 * 
 * @typedef {Object} StudentUpdate
 * @property {String} group_name
 * @property {Subgroup} subgroup
 * 
 * @typedef {String} Subgroup
 * Перечисления подгрупп
 * 
 * @typedef {Object} Subject
 * Модель, описывающая предмет
 * @property {String} name - Название предмета
 * @property {Integer} id
 * @property {?Array<UsefulLink>} useful_links
 * 
 * @typedef {Object} Teacher
 * Модель, описывающая преподавателя
 * @property {String} first_name - Имя преподавателя
 * @property {String} second_name - Фамилия преподавателя
 * @property {String} middle_name - Отчество преподавателя
 * @property {Integer} id
 * 
 * @typedef {Object} UsefulLink
 * @property {String} link
 * @property {?String} description
 * @property {Integer} id
 * 
 * @typedef {Object} ValidationError
 * @property {Array<String>} loc
 * @property {String} msg
 * @property {String} type
 * 
 * @typedef {String} WeekDay
 * Перечисления дней недели
 * 
 */
