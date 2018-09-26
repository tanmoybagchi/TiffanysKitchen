// tslint:disable-next-line:class-name
export class this_empty_class_needs_to_be_present_to_suppress_compile_errors { }

declare global {
  interface ObjectConstructor {
    copyMatchingProperties(destination, source);
  }
}

Object.copyMatchingProperties = function (target, source) {
  if (target === undefined || target === null || source === undefined || source === null) {
    return;
  }

  Object.keys(target).forEach(k => {
    if (source[k] === undefined) {
      return;
    }

    switch (typeof target[k]) {
      case 'string':
        target[k] = source[k] === null ?
          null :
          typeof source[k] === 'string' ?
            source[k] :
            source[k].toString();
        break;

      case 'boolean':
        target[k] = source[k] === null ?
          null :
          typeof source[k] === 'boolean' ?
            source[k] :
            !!source[k];
        break;

      case 'number':
        target[k] = source[k] === null ?
          null :
          typeof source[k] === 'number' ?
            source[k] :
            Number(source[k]);
        break;
    }
  });
};

