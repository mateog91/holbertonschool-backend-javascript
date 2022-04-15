export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    else {
      this._name = name;
    }

    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    else {
      this._length = length;
    }

    if (Array.isArray(students)) {
      for (const student of students) {
        if (typeof student !== 'string') {
          throw new TypeError('Students must be an array of strings');
        }
      }
      this._students = students;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    this._students = value;
  }
}
