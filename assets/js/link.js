/**
 * 给所有页面 <a> 标签上添加了 target='_blank' 属性。
 * 这样就可以确保链接在单击时在新标签页中打开。
 */
class Link {
    constructor() {
        // 获取所有的<a>标签元素
        this.anchorTags = document.getElementsByTagName('a');
        // 存储所有<a>标签的href属性值
        this.hrefs = [];
        for (let i = 0; i < this.anchorTags.length; i++) {
            this.hrefs.push(this.anchorTags[i].getAttribute('href'));
        }
        // 获取应该跳过的<a>标签的索引
        this.skippedHrefs = this.getSkippedHrefs();
        // 在新标签页中打开被跳过的链接
        this.openInNewTab();
    }

    // 获取应该跳过的<a>标签的索引
    getSkippedHrefs() {
        let skippedHrefs = [];
        for (let i = 0; i < this.hrefs.length; i++) {
            if (!this.hrefs[i].startsWith('#')) {
                skippedHrefs.push(i);
            }
        }
        return skippedHrefs;
    }

    // 在新标签页中打开被跳过的链接
    openInNewTab() {
        for (let i = 0; i < this.skippedHrefs.length; i++) {
            const anchorTag = this.anchorTags[this.skippedHrefs[i]];
            // 如果链接没有指定target属性，则在新标签页中打开链接
            if (!anchorTag.hasAttribute('target')) {
                anchorTag.setAttribute('target', '_blank');
            }
        }
    }
}

// 创建Link类的实例
const linkInstance = new Link();