const cache = new Map();

module.exports = class CacheHandler {
  constructor(options) {
    this.options = options;
  }

  async get(key) {
    // This could be stored anywhere, like durable storage
    const entry = cache.get(key);

    console.log('key', key);
    console.log('entry', entry);
    return entry;
  }

  async set(key, data, ctx) {
    console.log('key', key);
    console.log('data', data);
    console.log('ctx', ctx);

    const headersCacheTags = data?.headers?.['x-next-cache-tags']?.split(',');

    console.log('headersCacheTags', headersCacheTags);

    const tags = ctx.tags ?? headersCacheTags;
    // This could be stored anywhere, like durable storage
    cache.set(key, {
      value: data,
      lastModified: Date.now(),
      tags: tags,
    });
  }

  async revalidateTag(tags) {
    // tags is either a string or an array of strings
    console.log('tags', tags);
    tags = [tags].flat();
    // Iterate over all entries in the cache
    for (let [key, value] of cache) {
      // If the value's tags include the specified tag, delete this entry
      if (value.tags.some((tag) => tags.includes(tag))) {
        cache.delete(key);
      }
    }
  }

  // If you want to have temporary in memory cache for a single request that is reset
  // before the next request you can leverage this method
  resetRequestCache() {}
};
