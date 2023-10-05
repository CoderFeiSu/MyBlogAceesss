import os



def insert_code(file_path, analytics_lines, adsense_lines):
    print("---------------{}写入开始--------------".format(file_path))
    target_file = open(file_path, 'r')
    target_lines = target_file.readlines()
    target_file.close()
    target_str = ''.join(target_lines)
    if 'https://www.googletagmanager.com' in target_str or 'https://pagead2.googlesyndication.com' in target_str:
        print("---------------{}之前写入过，写入结束--------------".format(file_path))
        return;
    analytics_index = target_lines.index('    </head>\n')
#    print(target_lines)
#    analytics_index = target_lines.index('      </head><body for="html-export">\n')
    target_lines.insert(analytics_index, ''.join(analytics_lines))
    target_file = open(file_path, 'w')
    target_file.writelines(''.join(target_lines))
    target_file.close()
    print('谷歌分析写入成功')
    target_file = open(file_path, 'r')
    target_lines = target_file.readlines()
    target_file.close()
    adsense_index = target_lines.index('    </body></html>')
    target_lines.insert(adsense_index, ''.join(adsense_lines))
    target_file = open(file_path, 'w')
    target_file.writelines(''.join(target_lines))
    target_file.close()
    print('谷歌广告写入成功')
    print("---------------{}写入结束--------------".format(file_path))


if __name__ == "__main__":
    # 排除的html文件
    excluded_files = ['privacy.html']

    print("---------------脚本开始--------------")
    print("---------------读取内容开始--------------")
    source_file = open('inserCode.txt', 'r')
    source_lines = source_file.readlines()
    analytics_lines = source_lines[0:8]
    print('谷歌分析内容为:')
    for analytics_line in analytics_lines:
        print(analytics_line, end='')
    adsense_lines = source_lines[10:23]
    print('谷歌广告内容为:')
    for adsense_line in adsense_lines:
        print(adsense_line, end='')
    print("---------------读取内容结束--------------")

    print("---------------写入内容开始--------------")
    for root, dirs, files in os.walk('.'):
        for file in files:
            if not file.endswith('.html') or file in excluded_files:
                continue
            file_path = os.path.join(root, file)
            insert_code(file_path, analytics_lines, adsense_lines)
    print("---------------写入内容结束--------------")

    print("---------------脚本结束--------------")
