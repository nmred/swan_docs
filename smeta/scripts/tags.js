var tag = hexo.extend.tag,
  renderSync = hexo.render.renderSync;

tag.register('note', function(args, content){
  var className = args.shift(),
    header = '';

  if (args.length){
    header += '<strong class="note-title">' + args.join(' ') + '</strong>';
  }

  return '<blockquote class="note ' + className + '">' + header + renderSync({text: content, engine: 'markdown'}) + '</blockquote>';
}, true);