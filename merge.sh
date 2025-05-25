find . -type f -name '*.js' -or -name '*.ts' -or -name '*.fire' | while read file; do
  if grep -q '<<<<<<< HEAD' "$file"; then
    echo "Resolving $file"
    sed -i '' -e '/<<<<<<< HEAD/d' -e '/=======/d' -e '/>>>>>>>/d' "$file"
  fi
done

